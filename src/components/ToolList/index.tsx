import { useEffect } from 'react';
import { useTools } from '../../context/toolsContext';
import { ToolWidget } from '../index';

interface ToolData {
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
  id: number;
}
interface Props {
  inputValue: string;
  checkbox: boolean;
}

const addHashTag = (element: string) => {
  const NewElement = element.split('');
  for (let i = NewElement.length; i >= 0; i -= 1) {
    NewElement[i] = NewElement[i - 1];
  }
  NewElement[0] = '#';

  return NewElement.join('');
};

const ToolList = (props: Props) => {
  const { toolData, getToolsData, newUpdate } = useTools();
  const { inputValue, checkbox } = props;

  useEffect(() => {
    if (inputValue === '') getToolsData('/');
    else if (checkbox === false) {
      getToolsData(`?q=${inputValue}`);
    } else if (checkbox === true) {
      getToolsData(`?tags_like=${inputValue}`);
    }
  }, [inputValue, checkbox, newUpdate]);

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
