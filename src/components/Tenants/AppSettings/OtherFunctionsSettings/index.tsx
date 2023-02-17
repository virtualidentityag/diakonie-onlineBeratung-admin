import { useTranslation } from 'react-i18next';
import { CardEditable } from '../../../CardEditable';
import { FormSwitchField } from '../../../FormSwitchField';
import { useSingleTenantData } from '../../../../hooks/useSingleTenantData';
import { useTenantAdminDataMutation } from '../../../../hooks/useTenantAdminDataMutation.hook';
import styles from './styles.module.scss';

interface OtherFunctionsSettingsArgs {
    tenantId: string;
    hideTopics?: boolean;
    hideStatistics?: boolean;
}

export const OtherFunctionsSettings = ({ tenantId, hideTopics, hideStatistics }: OtherFunctionsSettingsArgs) => {
    const { t } = useTranslation();
    const { data, isLoading } = useSingleTenantData({ id: tenantId });
    const { mutate } = useTenantAdminDataMutation({
        id: tenantId,
        successMessageKey: 'tenants.message.settingsUpdate',
    });

    return (
        <CardEditable
            isLoading={isLoading}
            initialValues={{ ...data }}
            titleKey="tenants.appSettings.otherFunctions.title"
            onSave={mutate}
        >
            {!hideTopics && (
                <div className={styles.checkGroup}>
                    <FormSwitchField
                        labelKey="tenants.appSettings.otherFunctions.allowTopicCreation.title"
                        name={['settings', 'featureTopicsEnabled']}
                        inline
                        disableLabels
                    />
                    <p className={styles.checkInfo}>
                        {t('tenants.appSettings.otherFunctions.allowTopicCreation.description')}
                    </p>
                </div>
            )}
            {!hideStatistics && (
                <div className={styles.checkGroup}>
                    <FormSwitchField
                        labelKey="tenants.appSettings.otherFunctions.statistics.title"
                        name={['settings', 'featureStatisticsEnabled']}
                        inline
                        disableLabels
                    />
                    <p className={styles.checkInfo}>{t('tenants.appSettings.otherFunctions.statistics.description')}</p>
                </div>
            )}
        </CardEditable>
    );
};
