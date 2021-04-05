import styles from "./styles.module.scss";

function Form() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <form action="">
          <fieldset>
            <header>
              <legend>Add new tool</legend>
              <button>
                <img src="icon-close.svg" alt="" />
              </button>
            </header>
            <div>
              <label>
                Tool name
                <input type="text" id="tool-name" placeholder="Hotel" />
              </label>
            </div>
            <div>
              <label>
                Tool link
                <input
                  type="url"
                  id="tool-link"
                  placeholder="https://github/typicode/hotel"
                />
              </label>
            </div>
            <div>
              <label>
                Tool description
                <textarea name="description" id="description"></textarea>
              </label>
            </div>
            <div>
              <label>
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

export default Form;
