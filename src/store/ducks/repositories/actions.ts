import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

interface Payload {
    data?: Repository[];
}

interface ActionObject {
    type: string;
    payload?: Payload;
}

export const loadRequest = (): ActionObject => action(RepositoriesTypes.LOAD_REQUEST);
export const loadSuccess = (data: Repository[]): ActionObject => action(RepositoriesTypes.LOAD_SUCCESS, { data });
export const loadFailure = (): ActionObject => action(RepositoriesTypes.LOAD_FAILURE);
