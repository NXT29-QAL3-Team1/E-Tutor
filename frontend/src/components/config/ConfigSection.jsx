import "./ConfigSection.css";

const ConfigSection = ({ title, inputs, columns = 1, onChangeSection }) => {

  const handleInput = (id, value) => {
    if (onChangeSection) {
      onChangeSection(title, id, value); // بلغ الأب
    }
  };

  const columnedInputs = [];
  if (columns > 1) {
    for (let i = 0; i < inputs.length; i += inputs.length / columns) {
      columnedInputs.push(inputs.slice(i, i + inputs.length / columns));
    }
  }

  return (
    <section className="config-section">
      <h2 className="section-title">{title}</h2>

      {columns > 1 ? (
        <div className="footer-grid">
          {columnedInputs.map((col, colIndex) => (
            <div className="footer-column" key={colIndex}>
              {col.map((input, index) => (
                <div className="form-group" key={index}>
                  <label htmlFor={input.id}>{input.label}</label>

                  {input.type === "textarea" ? (
                    <textarea
                      id={input.id}
                      className="form-textarea"
                      placeholder={input.placeholder}
                      rows={4}
                      defaultValue={input.value || ""}
                      onChange={(e) => handleInput(input.id, e.target.value)}
                    />
                  ) : (
                    <input
                      id={input.id}
                      type={input.type || "text"}
                      className="form-input"
                      placeholder={input.placeholder}
                      defaultValue={input.value || ""}
                      onChange={(e) => handleInput(input.id, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        inputs.map((input, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={input.id}>{input.label}</label>

            {input.type === "textarea" ? (
              <textarea
                id={input.id}
                className="form-textarea"
                placeholder={input.placeholder}
                rows={4}
                defaultValue={input.value || ""}
                onChange={(e) => handleInput(input.id, e.target.value)}
              />
            ) : (
              <input
                id={input.id}
                type={input.type || "text"}
                className="form-input"
                placeholder={input.placeholder}
                defaultValue={input.value || ""}
                onChange={(e) => handleInput(input.id, e.target.value)}
              />
            )}
          </div>
        ))
      )}
    </section>
  );
};

export default ConfigSection;
