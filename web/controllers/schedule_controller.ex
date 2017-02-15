defmodule TrainSchedule.ScheduleController do
  use TrainSchedule.Web, :controller

  # def index(conn, _params) do
  #   %HTTPoison.Response{body: body} = HTTPoison.get!("http://developer.mbta.com/lib/gtrtfs/Departures.csv")
  #   json conn, "index.html"
  # end

  def index(conn, _params) do
      conn
      |> put_resp_content_type("text/csv")
      |> put_resp_header("content-disposition", "attachment; filename=\"Departures.csv\"")
      |> send_resp(200, csv_content())
  end

  defp csv_content do
    %HTTPoison.Response{body: body} = HTTPoison.get!('http://developer.mbta.com/lib/gtrtfs/Departures.csv')
    body
  end
end
