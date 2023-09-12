import gql from 'graphql-tag';
import { print } from 'graphql/language/printer';

export const ast = gql`
query myQuery {
    getAppointments(ptId: "6b87d552-a2fe-465a-998c-1b288fee212f") {
        items {
            appointmentDate
            createdOn
            duration
            patientName
            ptId
            zoomUrl
        }
    }
}   
`

export const query = print(ast);