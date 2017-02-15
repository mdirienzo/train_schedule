defmodule TrainSchedule.Router do
  use TrainSchedule.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json", "csv"]
  end

  scope "/", TrainSchedule do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/", TrainSchedule do
    pipe_through :api

    get "/schedules", ScheduleController, :index
  end
end
