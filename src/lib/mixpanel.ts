import mixpanel from "mixpanel-browser";

export function triggerStartTrialEvent(location: string = "website") {
    mixpanel.track('Start Free Trial', {
        location
    })
}