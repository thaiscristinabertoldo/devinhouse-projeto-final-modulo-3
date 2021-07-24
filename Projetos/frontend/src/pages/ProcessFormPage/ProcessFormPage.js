import { Box, Button, Divider, Grid, Paper, Typography } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { TextInput } from '../../components/TextInput';
import { useStyles } from './ProcessRegistrationPage.styles';
import SaveIcon from '@material-ui/icons/Save';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import ForwardRoundedIcon from '@material-ui/icons/ForwardRounded';
import { useHistory, useParams } from 'react-router-dom';
import { SearchSubjectComboBox } from '../../components/SearchSubjectComboBox';
import { SearchStakeholderComboBox } from '../../components/SearchStakeholderComboBox';
import { initialProcessValues, registrationSchema } from './RegistrationSchema';
import { DivError } from '../../components/DivError';
import { BaseLayout } from '../../layouts/BaseLayout';
import { createProcess } from '../../services/api/processos-service';

export const ProcessFormPage = (props) => {
  const classes = useStyles();

  const history = useHistory();

  const { id } = useParams();

  const handleGoBack = () => {
    history.push('/processos');
  };

  const handleSubmit = (values, { setSubmitting }) => {
    createProcess(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const nuProcesso = id || 1;

  return (
    <BaseLayout>
      <Grid container justifyContent="center">
        <Paper elevation={3} className={classes.container}>
          <Box>
            <Grid container justifyContent="center">
              <Typography variant="h1" align="center" gutterBottom className={classes.title}>
                <strong>Formulário de {id !== undefined ? 'Edição' : 'Cadastro'} de Processo</strong>
              </Typography>
              <Formik
                initialValues={initialProcessValues}
                onSubmit={handleSubmit}
                validationSchema={registrationSchema}
              >
                {({ values, setFieldValue, isSubmitting, isValid, errors, resetForm, touched }) => (
                  <Form className={classes.form}>
                    <Divider orientation="horizontal" variant="fullWidth" />
                    <Field
                      name="sgOrgaoSetor"
                      label="Órgão/Setor"
                      error={touched?.sgOrgaoSetor && errors.sgOrgaoSetor}
                      as={TextInput}
                    />
                    <ErrorMessage name="sgOrgaoSetor" component={DivError} />
                    <Field name="nuAno" label="Ano do Processo" error={touched?.nuAno && errors.nuAno} as={TextInput} />
                    <ErrorMessage name="nuAno" component={DivError} />
                    <Field
                      name="descricao"
                      label="Descrição"
                      multiline="true"
                      error={touched?.descricao && errors?.descricao}
                      as={TextInput}
                    />
                    <ErrorMessage name="descricao" component={DivError} />
                    <Grid container direction="row" justifyContent="space-between">
                      <div className={classes.halfInput}>
                        <Field
                          name="chaveProcesso"
                          label="Chave do Processo"
                          value={values?.sgOrgaoSetor + ' ' + nuProcesso + '/' + values?.nuAno}
                          disabled="true"
                          as={TextInput}
                        />
                      </div>
                      <div className={classes.halfInput}>
                        <Field
                          name="nuProcesso"
                          label="Número do Processo"
                          defaultValue={nuProcesso.toString().padStart(4, '0')}
                          disabled="true"
                          as={TextInput}
                        />
                      </div>
                    </Grid>
                    <Divider orientation="horizontal" variant="fullWidth" className={classes.divider} />
                    <Grid container justifyContent="center">
                      <Typography variant="h2" className={classes.subtitle}>
                        <strong>Assunto</strong>
                      </Typography>
                    </Grid>
                    <Divider orientation="horizontal" variant="fullWidth" className={classes.divider} />
                    <Field
                      autoFocus
                      name="cdAssunto"
                      error={touched?.cdAssunto && errors?.cdAssunto}
                      setFieldValue={setFieldValue}
                      as={SearchSubjectComboBox}
                    />
                    <ErrorMessage name="cdAssunto" component={DivError} />
                    <Field
                      autoFocus
                      name="cdAssunto.dtCadastro"
                      label="Data do Cadastro"
                      disabled="true"
                      as={TextInput}
                    />
                    <Divider orientation="horizontal" variant="fullWidth" className={classes.divider} />
                    <Grid container justifyContent="center">
                      <Typography variant="h2" className={classes.subtitle}>
                        <strong>Interessado</strong>
                      </Typography>
                    </Grid>
                    <Divider orientation="horizontal" variant="fullWidth" className={classes.divider} />
                    <Field
                      autoFocus
                      name="cdInteressado"
                      error={touched?.cdInteressado && errors?.cdInteressado}
                      setFieldValue={setFieldValue}
                      as={SearchStakeholderComboBox}
                    />
                    <ErrorMessage name="cdInteressado" component={DivError} />
                    <Field
                      autoFocus
                      name="cdInteressado.nmInteressado"
                      label="Nome do Interessado"
                      disabled="true"
                      as={TextInput}
                    />
                    <Field
                      autoFocus
                      name="cdInteressado.dtNascimento"
                      label="Data de Nascimento"
                      disabled="true"
                      as={TextInput}
                    />
                    <br />
                    <br />
                    <Grid container justifyContent="space-between">
                      <Button
                        style={{ backgroundColor: 'gray' }}
                        variant="contained"
                        className={classes.button}
                        startIcon={<ForwardRoundedIcon style={{ transform: 'rotate(180deg)' }} />}
                        onClick={handleGoBack}
                      >
                        <strong>Voltar</strong>
                      </Button>
                      <Button
                        style={{ backgroundColor: 'lightcoral' }}
                        variant="contained"
                        className={classes.button}
                        startIcon={<CancelRoundedIcon />}
                        onClick={resetForm}
                        disabled={isSubmitting}
                      >
                        <strong>Limpar</strong>
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                        disabled={isSubmitting || !isValid}
                      >
                        <strong>Salvar</strong>
                      </Button>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </BaseLayout>
  );
};
