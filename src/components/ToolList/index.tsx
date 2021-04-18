/* eslint-disable react/no-unused-prop-types */
import React, { useEffect } from 'react';
import useGetTools from '../../Hooks/useGetTools';
import { ToolWidget } from '../index';

interface ToolData {
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
  id: number;
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
  }, []);

  return (
    <>
      {toolData.map((tool: ToolData) => (
        <ToolWidget
          title={tool.title}
          link={tool.link}
          description={tool.description}
          tags={tool.tags.map(addHashTag).join(' ')}
          id={tool.id}
        />
      ))}
    </>
  );
};

export default ToolList;
