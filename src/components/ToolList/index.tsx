import { useEffect } from 'react';
import { useTools } from '../../context/ToolsContext';
import addHashTag from '../../utils/addHashTag';
import { ToolWidget } from '../index';

import styles from './styles.module.scss';

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

const ToolList = (props: Props) => {
  const { toolData, getToolsData, newUpdate } = useTools();
  const { inputValue, checkbox } = props;

  useEffect(() => {
    if (inputValue === '') getToolsData('');
    else if (checkbox === false) {
      getToolsData(`?q=${inputValue}`);
    } else if (checkbox === true) {
      getToolsData(`?tags_like=${inputValue}`);
    }
  }, [inputValue, checkbox, newUpdate]);

  return (
    <section className={styles.toolList}>
      {toolData.map((tool: ToolData) => (
        <ToolWidget
          title={tool.title}
          link={tool.link}
          description={tool.description}
          tags={tool.tags.map(addHashTag).join(' ')}
          id={tool.id}
        />
      ))}
    </section>
  );
};

export default ToolList;
