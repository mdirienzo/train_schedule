defmodule TrainSchedule.PageController do
  use TrainSchedule.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
