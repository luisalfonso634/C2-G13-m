import { gql } from "@apollo/client"

export const queryLogin = gql`
  mutation login($password: String!, $email: String) {
    tokenAuth(password: $password, email: $email) {
      user {
        pk
        firstName
        lastName
        isSysadmin
      }
      token
    }
  }
`

export const queryRegisterClient = gql`
  mutation registerClient(
    $name: String
    $surname: String
    $password1: String
    $password2: String
    $email: String
    $phone: String
  ) {
    registerclient(
      name: $name
      surname: $surname
      password1: $password1
      password2: $password2
      email: $email
      phone: $phone
    ) {
      user {
        id
        firstName
        lastName
        isClient
      }
    }
  }
`

export const queryCreateAppointment = gql`
  mutation createAppointment(
    $Date: Date
    $Time: Time
    $idDoctor: Int
    $idPatient: Int
  ) {
    createappointment(
      Date: $Date
      Time: $Time
      idDoctor: $idDoctor
      idPatient: $idPatient
    ) {
      appointment {
        id
      }
    }
  }
`

export const queryAllRooms = gql`
{
  allrooms{
    id,
    image,
    title,
    text,
    In,
    Out,
    price
	}
}
`

export const querySearchRoom = gql`
  query findRoom($idRoom: Int) {
    searchroom(idRoom: $idRoom) {
      id,
      image,
      title,
      text,
      In,
      Out,
      price
    }
  }
`