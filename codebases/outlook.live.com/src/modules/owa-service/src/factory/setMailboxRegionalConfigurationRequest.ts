// This file is auto-generated by the "tsproxygen.exe" tool. Manual modification is not recommended.
import type SetMailboxRegionalConfigurationRequest from '../contract/SetMailboxRegionalConfigurationRequest';

export default function setMailboxRegionalConfigurationRequest(
    data: SetMailboxRegionalConfigurationRequest
): SetMailboxRegionalConfigurationRequest {
    let result: SetMailboxRegionalConfigurationRequest = {
        __type: 'SetMailboxRegionalConfigurationRequest:#Exchange',
        ...data,
    };

    return result;
}
