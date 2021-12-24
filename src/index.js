import React from 'react';
import ReactDOM from 'react-dom';
import Theme from "./theme";
import Router from "./router";
import Auth from "./services/auth/Auth";
import Store from "./store";
import I18n from "./i18n/Provider";

ReactDOM.render(
    <React.StrictMode>
        <Store>
            <I18n>
                <Auth>
                    <Theme>
                        <Router/>
                    </Theme>
                </Auth>
            </I18n>
        </Store>
    </React.StrictMode>,
    document.getElementById('root')
);


