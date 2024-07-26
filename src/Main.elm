module Main exposing (main)

import Browser
import Html exposing (Html, div, text, textarea)
import Html.Attributes
import Html.Events exposing (onInput)
import Json.Encode
import Msg exposing (Model, Msg(..))


main : Program () Model Msg
main =
    Browser.sandbox { init = Model "test" 0, update = update, view = view }


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            { model | count = model.count + 1 }

        Decrement ->
            { model | count = model.count - 1 }

        ChangeText newText ->
            { model | message = newText }


view : Model -> Html Msg
view model =
    div []
        [ textarea [ onInput ChangeText, Html.Attributes.value model.message ] [ text model.message ]
        , Html.node "editable-stuff" [ Html.Attributes.property "elmElement" (Json.Encode.string model.message) ] []
        ]
