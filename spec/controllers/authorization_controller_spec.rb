require 'rails_helper'

RSpec.describe AuthorizationController, type: :controller do
    let(:john) { create_john }
    let(:params) {{user: {email: john.email, password: "bro"}}}

    it "allows someone to log in" do
      post :create, params: params
      expect(json_body["status"]).to eq("success")
      expect(json_body["auth_token"]).to eq(john.authorization_token)
    end
end
