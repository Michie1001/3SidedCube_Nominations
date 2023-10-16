
import * as yup from 'yup';

export const formSchema = yup.object().shape({
    nomineeName: yup
        .string()
        .oneOf(["Dummy Name 1", "Dummy Name 1", "Dummy Name 3"])
        .required("Please select a nominee"),
    // reason: yup.string().min(5).max(100).required(),
    // process: yup.boolean().oneOf([true], "Please select one"),
});