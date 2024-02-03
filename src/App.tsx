import React from 'react';
import '@patternfly/react-core/dist/styles/base.css'
import { Bullseye, Page, PageSection } from '@patternfly/react-core';
import QRPresenter from './QRPresenter';
import './App.css';

function App() {
    return (
        <Page>
            <PageSection>
                <Bullseye>
                    <QRPresenter />
                </Bullseye>
            </PageSection>
        </Page>
    );
}

export default App;
