import React, {
  FC, ReactElement, useEffect, useMemo,
} from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import * as RepositoryActions from '../../store/ducks/repositories/actions';

const RepositoryList: FC<Record<string, never>> = (): ReactElement => {
  const repositories = useSelector((state: ApplicationState) => state.repositories.data);
  const dispatch = useDispatch();

  const { loadRequest } = useMemo(() => bindActionCreators(RepositoryActions, dispatch), [dispatch]);

  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  return (
    <ul>
      {repositories.map((repository) => <li key={repository.id}>{repository.name}</li>)}
    </ul>
  );
};

export default RepositoryList;
