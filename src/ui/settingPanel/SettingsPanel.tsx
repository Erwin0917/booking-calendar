import { observer } from 'mobx-react-lite';
import React from 'react';
import { SettingPanelWrapper } from './SettingsPanel.style';

export const SettingsPanel = observer((): JSX.Element => {

    return (
        <SettingPanelWrapper>
            Settings Panel
        </SettingPanelWrapper>
    );

});
