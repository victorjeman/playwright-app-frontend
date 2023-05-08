import { useEffect } from 'react';
import { Card, Text, Badge, Button, Group, Avatar, Tooltip } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { WithPermissions } from 'shared/components/with-permissions/with-permissions';
import { Project } from 'features/project/types/project-types';
import { useAppDispatch } from 'app/store-hook';
import { setActiveProjectAction } from 'features/project/store/project-slice';
import { useDeleteProjectMutation } from 'features/project/api/project-api';
import { projectGetColorByPriority } from 'features/project/utils/project-get-color-by-priority';

interface Props {
  project: Project;
}

export const ProjectThumbnail = ({ project }: Props) => {
  const dispatch = useAppDispatch();

  const [deleteProjectMutation, { isSuccess }] = useDeleteProjectMutation();

  useEffect(() => {
    if (isSuccess) {
      notifications.show({
        title: 'Yey',
        message: `${project.title} deleted successfully`,
      });
    }
  }, [isSuccess]);

  return (
    // STEP-5.9: add a test id attr with `project-thumbnail` as value
    <Card shadow="md" padding="lg" radius="md" withBorder data-testid="">
      <Group position="apart" mb="lg">
        <Text size="xl" weight={600} mb="0">
          {project.title}
        </Text>

        <Badge color={projectGetColorByPriority(project.priority)} size="lg">
          {project.priority}
        </Badge>
      </Group>

      <Tooltip.Group openDelay={300} closeDelay={100}>
        <Avatar.Group spacing="xs">
          {project?.employees?.map((employee) => (
            <Tooltip key={employee} label={employee} withArrow>
              <Avatar
                src={`images/employees/${employee.toLocaleLowerCase()}.png`}
                radius="50%"
                size="lg"
              />
            </Tooltip>
          ))}
        </Avatar.Group>
      </Tooltip.Group>

      <Group noWrap position="left" mt="md" mb="md" spacing="md">
        {project.technologies.map((technology) => (
          <Badge key={technology} color="gray" size="lg">
            {technology}
          </Badge>
        ))}
      </Group>

      <Group grow>
        <WithPermissions allowedPermissions={['project/update']}>
          <Button
            variant="light"
            color="blue"
            mt="md"
            radius="md"
            onClick={() => dispatch(setActiveProjectAction(project))}
            // STEP-8.1: Generate a unique test id for each update button using the project title
            data-testid={`project-update-button-${'what?'}`}
          >
            Update
          </Button>
        </WithPermissions>

        <WithPermissions allowedPermissions={['project/delete']}>
          <Button
            variant="outline"
            color="red"
            mt="md"
            radius="md"
            onClick={() => deleteProjectMutation(project.id)}
            // STEP-7.1: Generate a unique test id for each delete button using the project title
            data-testid={`project-delete-button-${'what?'}`}
          >
            Delete
          </Button>
        </WithPermissions>
      </Group>
    </Card>
  );
};
