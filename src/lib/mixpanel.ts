import mixpanel from "mixpanel-browser";

export function triggerStartTrialEvent(location: string = "website") {
    mixpanel.track('Start Free Trial', {
        location
    })
}

export function triggerBookDemoEvent(location: string = "website") {
    mixpanel.track('Book a Demo', {
        location
    })
}

export function triggerSignUpInitiatedEvent(location: string = "website") {
    mixpanel.track('Sign Up Initiated', {
        location
    })
}