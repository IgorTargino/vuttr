import styles from './styles.module.scss';

function Modal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <form action="">
          <fieldset>
            <header>
              <legend>Add new tool</legend>
              <button type="button">
                <img src="icon-close.svg" alt="" />
              </button>
            </header>
            <div>
              <label htmlFor="tool-name">
                Tool name
                <input type="text" id="tool-name" placeholder="Hotel" />
              </label>
            </div>
            <div>
              <label htmlFor="tool-link">
                Tool link
                <input
                  type="url"
                  id="tool-link"
                  placeholder="https://github/typicode/hotel"
                />
              </label>
            </div>
            <div>
              <label htmlFor="description">
                Tool description
                <textarea name="description" id="description" />
              </label>
            </div>
            <div>
              <label htmlFor="tags">
                Tags
                <input
                  type="text"
                  id="tags"
                  placeholder="node organizing webapps domain developer https proxy"
                />
              </label>
            </div>

            <input type="submit" value="Add tool" />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Modal;
