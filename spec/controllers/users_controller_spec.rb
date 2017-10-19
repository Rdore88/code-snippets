require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  let(:params) {{user: {username: "robby", password: "hello", password_confirmation: "hello", email: "robby@dore.com"}}}
  let(:missing_params) {{user: {username: "robby", password: "hello", password_confirmation: "hello"}}}
  let(:bad_params) {{user: {username: "robby", password: "hello", password_confirmation: "helo", email: "robby@dore.com"}}}


  it "creates a user if all information is present" do
    post :create, params: params
    assert response.ok?
    expect(User.find_by(email: "robby@dore.com")).to be_present
  end

  it "wont create a user if information is missing" do
    post :create, params: missing_params
    assert response.ok?
    expect(json_body["message"]).to eq("Please enter all correct information")
  end

end
