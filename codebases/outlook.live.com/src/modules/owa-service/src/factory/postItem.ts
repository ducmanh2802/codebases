// This file is auto-generated by the "tsproxygen.exe" tool. Manual modification is not recommended.
import type PostItem from '../contract/PostItem';

export default function postItem(data: PostItem): PostItem {
    let result: PostItem = {
        __type: 'PostItem:#Exchange',
        ...data,
    };

    return result;
}
