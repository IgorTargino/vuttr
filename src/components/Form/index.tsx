import { AiOutlinePlus } from 'react-icons/ai';
import styles from './styles.module.scss';

function Form() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <form action="">
          <fieldset>
            <header>
              <legend>
                <AiOutlinePlus size={20} />
                Add new tool
              </legend>
              <button type="button">
                <img src="icon-close.svg" alt="" />
              </button>
            </header>
            <section>
              <label htmlFor="tool-name">
                Tool name
                <input type="text" id="tool-name" placeholder="Hotel" />
              </label>
            </section>
            <section>
              <label htmlFor="tool-link">
                Tool link
                <input
                  type="url"
                  id="tool-link"
                  placeholder="https://github/typicode/hotel"
                />
              </label>
            </section>
            <section>
              <label htmlFor="description">
                Tool description
                <textarea name="description" id="description" />
              </label>
            </section>
            <article>
              <label htmlFor="tags">
                Tags
                <input
                  type="text"
                  id="tags"
                  placeholder="tag1, tag2, tag3, tag4, tag5"
                />
              </label>
            </article>

            <input type="submit" value="Add tool" />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Form;
