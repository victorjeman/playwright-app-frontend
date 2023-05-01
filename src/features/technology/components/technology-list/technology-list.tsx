import { useEffect } from 'react';
import { notifications } from '@mantine/notifications';
import { Button, Group, Table, Title } from '@mantine/core';

import { useAppDispatch } from 'app/store-hook';
import {
  setActiveTechnologyAction,
  setIsCreateTechnologyFormVisibleAction,
} from 'features/technology/store/technology-slice';
import {
  useGetTechnologiesQuery,
  useDeleteTechnologyMutation,
} from 'features/technology/api/technology-api';
import { WithPermissions } from 'shared/components/with-permissions/with-permissions';

export const TechnologyList = () => {
  const dispatch = useAppDispatch();

  const { data: technologies } = useGetTechnologiesQuery();
  const [deleteTechnologyMutation, { isSuccess }] = useDeleteTechnologyMutation();

  const ths = (
    <tr>
      <th>Technology</th>
      <th style={{ width: '250px' }}>
        <WithPermissions allowedPermissions={['technology/create']}>
          <Button
            variant="light"
            color="blue"
            mt="md"
            radius="md"
            fullWidth
            onClick={() => dispatch(setIsCreateTechnologyFormVisibleAction(true))}
          >
            Add new technology
          </Button>
        </WithPermissions>
      </th>
    </tr>
  );

  const rows = technologies?.map((technology) => (
    <tr key={technology.id}>
      <td>{technology.name}</td>
      <td>
        <Group grow>
          <WithPermissions allowedPermissions={['technology/update']}>
            <Button
              variant="light"
              color="blue"
              mt="md"
              radius="md"
              onClick={() => dispatch(setActiveTechnologyAction(technology))}
            >
              Edit
            </Button>
          </WithPermissions>

          <WithPermissions allowedPermissions={['technology/delete']}>
            <Button
              variant="outline"
              color="red"
              mt="md"
              radius="md"
              onClick={() => deleteTechnologyMutation(technology.id)}
            >
              Delete
            </Button>
          </WithPermissions>
        </Group>
      </td>
    </tr>
  ));

  useEffect(() => {
    if (isSuccess) {
      notifications.show({
        title: 'Yey',
        message: 'Technology deleted successfully',
      });
    }
  }, [isSuccess]);

  return (
    <>
      <Title order={2} align="center" mb="md">
        All technologies
      </Title>

      <Table
        striped
        highlightOnHover
        withBorder
        withColumnBorders
        captionSide="bottom"
        maw={700}
        mx="auto"
        mb="xl"
      >
        <caption>Technologies Table</caption>
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};
