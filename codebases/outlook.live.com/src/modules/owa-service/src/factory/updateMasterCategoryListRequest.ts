// This file is auto-generated by the "tsproxygen.exe" tool. Manual modification is not recommended.
import type UpdateMasterCategoryListRequest from '../contract/UpdateMasterCategoryListRequest';

export default function updateMasterCategoryListRequest(
    data: UpdateMasterCategoryListRequest
): UpdateMasterCategoryListRequest {
    let result: UpdateMasterCategoryListRequest = {
        __type: 'UpdateMasterCategoryListRequest:#Exchange',
        ...data,
    };

    return result;
}
