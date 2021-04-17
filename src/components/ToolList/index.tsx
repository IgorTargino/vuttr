import React, { useEffect } from 'react';
import useGetTools from '../../Hooks/useGetTools';
import { ToolWidget } from '../index';

interface ToolData {
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
}

const addHashTag = (element: string) => {
  const NewElement = element.split('');
  for (let i = NewElement.length; i >= 0; i -= 1) {
    NewElement[i] = NewElement[i - 1];
  }
  NewElement[0] = '#';

  return NewElement.join('');
};

const ToolList = () => {
  const { request, toolData } = useGetTools();

  useEffect(() => {
    request('tools');
  }, [toolData]);

  return (
    <>
      {toolData.map((props: ToolData) => (
        <ToolWidget
          title={props.title}
          link={props.link}
          description={props.description}
          tags={props.tags.map(addHashTag).join(' ')}
        />
      ))}
    </>
  );
};

export default ToolList;
