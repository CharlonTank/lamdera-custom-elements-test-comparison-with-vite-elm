module Msg exposing (Model, Msg(..))


type Msg
    = Increment
    | Decrement
    | ChangeText String


type alias Model =
    { message : String, count : Int }
