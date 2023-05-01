import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/store-hook';
import { setIsCreateTechnologyFormVisibleAction } from 'features/technology/store/technology-slice';
import { useCreateTechnologyMutation } from 'features/technology/api/technology-api';
import { TechnologyForm } from 'features/technology/components/technology-form/technology-form';

export const TechnologyCreate = () => {
  const dispatch = useAppDispatch();

  const { isCreateTechnologyFormVisible } = useAppSelector((state) => state.technology);

  const [createTechnologyMutation, { isSuccess }] = useCreateTechnologyMutation();

  useEffect(() => {
    if (isSuccess) dispatch(setIsCreateTechnologyFormVisibleAction(false));
  }, [isSuccess]);

  return (
    <TechnologyForm
      title="Create technology"
      submitText="Create"
      isOpen={isCreateTechnologyFormVisible}
      onSubmit={(values) => createTechnologyMutation(values)}
      onClose={() => dispatch(setIsCreateTechnologyFormVisibleAction(false))}
    />
  );
};
