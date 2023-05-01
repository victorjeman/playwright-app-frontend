import { useAppDispatch, useAppSelector } from 'app/store-hook';
import { setActiveTechnologyAction } from 'features/technology/store/technology-slice';
import { useUpdateTechnologyMutation } from 'features/technology/api/technology-api';
import { TechnologyForm } from 'features/technology/components/technology-form/technology-form';
import { useEffect } from 'react';

export const TechnologyUpdate = () => {
  const dispatch = useAppDispatch();

  const { activeTechnology } = useAppSelector((state) => state.technology);

  const [updateTechnologyMutation, { isSuccess }] = useUpdateTechnologyMutation();

  useEffect(() => {
    if (isSuccess) dispatch(setActiveTechnologyAction(null));
  }, [isSuccess]);

  return (
    <TechnologyForm
      title="Update technology"
      submitText="Update"
      isOpen={!!activeTechnology}
      activeTechnology={activeTechnology}
      onSubmit={(values) => updateTechnologyMutation({ id: activeTechnology!.id, ...values })}
      onClose={() => dispatch(setActiveTechnologyAction(null))}
    />
  );
};
