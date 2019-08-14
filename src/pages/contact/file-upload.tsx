import { navigate } from "gatsby-link";
import React from "react";
import Layout from "../../components/Layout";

function encode(data: any) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

interface FileUloadProps { }

export default class Contact extends React.Component<FileUloadProps> {
  constructor(props: FileUloadProps) {
    super(props);
    this.state = {};
  }

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  public handleAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    if (input.files) {
      this.setState({ [input.name]: input.files[0] });
    }
  };

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const action = form.getAttribute("action");
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => action && navigate(action))
      .catch(error => alert(error));
  };

  public render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>File Upload</h1>
              <form
                name="file-upload"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="file-upload" />
                <div hidden={true}>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"name"}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="file">
                    <label className="file-label">
                      <input
                        className="file-input"
                        type="file"
                        name="attachment"
                        onChange={this.handleAttachment}
                      />
                      <span className="file-cta">
                        <span className="file-label">Choose a file…</span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
