'use client';

import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

export default function MixpanelProvider() {
    useEffect(() => {
        // Create an instance of the Mixpanel object, your token is already added to this snippet
        mixpanel.init('45c85bb165b5c88c50f508b2c046ecfc', {
            autocapture: true,
            record_sessions_percent: 100,
            debug: process.env.NODE_ENV !== 'production',
            persistence: 'localStorage',
        })


    }, []);

    return null;
}
