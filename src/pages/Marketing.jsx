/** @format */

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class Marketing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isForm2: false
    };
  }
    render() {
        return (
            <Formik
                initialValues={{
                    theme: '',
                    sujet: ''
                }}
                validationSchema={Yup.object().shape({
                    theme: Yup.string().required('theme est requis'),
                    sujet: Yup.string().required('Sujet est requis')
                })}
                onSubmit={fields => {
                    alert(
                        'SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4)
                    );
                }}
                render={({ errors, status, touched }) => (
                  
                    <Form>
                    <div className="form-row">
                            <div className="form-group col-12">
  <h2>Nous contacter</h2>
  <h4>Bienvenue dans notre espace d'assistance de Marketing Relationnel</h4>
   <h4>Nous sommes là pour vous aider.</h4> 
   <p>Le pole "relation reseau" de Reneaut scope est a votre service pour : </p>
  <ul>
  <li>repondre a toute vos question</li>
  <li>vous former au different applications Marketing(one vision, Maeva, Zephyr et Catalogue)
   </li>
  <li>vous accompagner dans la mise en place d'operations locales.</li>
  </ul> 
  <br/>
  <hr/>
  <br/>
   <p>Veillez precisier l'object de votre demande et nous vous proposerons la meilleur solution.</p>

  </div>
  </div>
                        <div className="form-row">
                            <div className="form-group col-4">
                                <Field
                                    name="theme"
                                    as="select"
                                    className={
                                        'form-control' +
                                        (errors.title && touched.title
                                            ? ' is-invalid'
                                            : '')
                                    }
                                >
                                    <option value="">Théme de votre demande</option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Ms">Ms</option>
                                </Field>
                                <ErrorMessage
                                    name="theme"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="form-group col-4">
                                <Field
                                    name="sujet"
                                    as="select"
                                    className={
                                        'form-control' +
                                        (errors.title && touched.title
                                            ? ' is-invalid'
                                            : '')
                                    }
                                >
                                    <option value="">Théme de votre demande</option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Ms">Ms</option>
                                </Field>
                                <ErrorMessage
                                    name="sujet"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="form-group col-4">
                            <button type="submit" className="btn btn-primary mr-4">
                                Valider     
                            </button>
                              </div>
                        </div>
                    </Form>
                )}
            />
        );
    }
}

export default Marketing;
