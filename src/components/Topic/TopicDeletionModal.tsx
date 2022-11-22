import React, { useEffect, useState } from 'react';
import { message, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import Title from 'antd/lib/typography/Title';
import pubsub, { PubSubEvents } from '../../state/pubsub/PubSub';
import deleteTopicData from '../../api/topic/deleteTopicData';
import { TopicData } from '../../types/topic';

export const TopicDeletionModal = () => {
    const { t } = useTranslation();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [topicModel, setTopicModel] = useState<TopicData | undefined>(undefined);
    const handleOnDelete = () => {
        setIsModalVisible(false);
        if (topicModel) {
            deleteTopicData(topicModel).then(() => {
                setTopicModel(undefined);
                pubsub.publishEvent(PubSubEvents.TOPICLIST_UPDATE, undefined);
                message.success({
                    content: t('message.topic.delete'),
                    duration: 3,
                });
            });
        }
    };

    useEffect(() => {
        pubsub.subscribe(PubSubEvents.TOPIC_DELETE, (data) => {
            setTopicModel(data);
            setIsModalVisible(true);
        });
    }, []);

    if (topicModel === undefined) {
        return <div />;
    }

    return (
        <Modal
            title={<Title level={2}>{t('topic.modal.headline.delete')}</Title>}
            open={isModalVisible}
            onOk={handleOnDelete}
            onCancel={() => {
                setTopicModel(undefined);
            }}
            cancelText={t('btn.cancel.uppercase')}
            centered
            okText={t('btn.ok.uppercase')}
        >
            <p>{t('topic.modal.text.delete')}</p>
        </Modal>
    );
};
