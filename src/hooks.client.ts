import type { HandleClientError } from "@sveltejs/kit";

export const handleError: HandleClientError = ({ error, event }) => {
	// send error to an error tracking service
    // This could be sent to splunk
	console.log(event.url, error)
}