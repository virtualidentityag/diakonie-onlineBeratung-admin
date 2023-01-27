import { Form, Switch } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

interface FormSwitchFieldProps {
    labelKey?: string;
    label?: React.ReactChild;
    name: string | string[];
    help?: string;
    disabled?: boolean;
    required?: boolean;
    errorMessage?: string;
    checkedKey?: string;
    unCheckedKey?: string;
    paragraphKey?: string;
    inline?: boolean;
    disableLabels?: boolean;
}

interface FormSwitchFieldLocalProps {
    onChange?: (value: boolean) => void;
    checked?: boolean;
    disabled?: boolean;
    paragraphKey?: string;
    checkedKey: string;
    unCheckedKey: string;
    disableLabels?: boolean;
}

const FormSwitchFieldLocal = ({
    onChange,
    checked,
    paragraphKey,
    checkedKey,
    disabled,
    disableLabels,
    unCheckedKey,
}: FormSwitchFieldLocalProps) => {
    const { t } = useTranslation();

    return (
        <div className="formSwitchField__container">
            <Switch
                disabled={disabled}
                size="default"
                onChange={onChange}
                checked={checked}
                checkedChildren={!disableLabels && t(checkedKey)}
                unCheckedChildren={!disableLabels && t(unCheckedKey)}
            />
            {paragraphKey && <Paragraph className="desc__toggleText">{t(paragraphKey)}</Paragraph>}
        </div>
    );
};

export const FormSwitchField = ({
    name,
    label,
    labelKey,
    required,
    help,
    disabled,
    errorMessage,
    paragraphKey,
    inline,
    disableLabels,
    checkedKey = 'yes',
    unCheckedKey = 'no',
}: FormSwitchFieldProps) => {
    const [t] = useTranslation();
    const message = errorMessage || t('form.errors.required');

    return (
        <Form.Item
            name={name}
            label={label || t(labelKey)}
            rules={required ? [{ required: true, message }] : undefined}
            help={help ? t(help) : undefined}
            valuePropName="checked"
            className={classNames(styles.item, { [styles.inline]: inline })}
        >
            <FormSwitchFieldLocal
                paragraphKey={paragraphKey}
                checkedKey={checkedKey}
                unCheckedKey={unCheckedKey}
                disabled={disabled}
                disableLabels={disableLabels}
            />
        </Form.Item>
    );
};
