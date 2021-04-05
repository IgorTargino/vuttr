import styles from "./styles.module.scss";

function Modal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <form action="">
          <fieldset>
            <legend>Add new tool</legend>

            <div>
              <label htmlFor="tool-name">Tool name</label>
              <br />
              <input type="text" id="tool-name" placeholder="Hotel" />
            </div>

            <div>
              <label htmlFor="tool-link">Tool link</label>
              <br />
              <input
                type="url"
                id="tool-link"
                placeholder="https://github/typicode/hotel"
              />
            </div>

            <div>
              <label htmlFor="tool-description">Tool description</label>
              <br />
              <textarea name="description" id="description" ></textarea>
            </div>

            <div>
              <label htmlFor="tags">Tags</label>
              <br />
              <input
                type="text"
                id="tags"
                placeholder="node organizing webapps domain developer https proxy"
              />
            </div>

            <input type="submit" value="Add tool" />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Modal;
