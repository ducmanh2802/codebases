// This file is auto-generated by the "tsproxygen.exe" tool. Manual modification is not recommended.
import type JsonRequestHeaders from '../contract/JsonRequestHeaders';

export default function jsonRequestHeaders(data: JsonRequestHeaders): JsonRequestHeaders {
    let result: JsonRequestHeaders = {
        __type: 'JsonRequestHeaders:#Exchange',
        ...data,
    };

    return result;
}
