#pragma once
#include <drogon/HttpController.h>
#include <json/json.h>

namespace api {
    using namespace drogon;
    class friends: public HttpController<friends> {
        public:
            METHOD_LIST_BEGIN
                ADD_METHOD_TO(friends::get_friends_list, "/get_friends_list", Get);
            METHOD_LIST_END
            void get_friends_list(const HttpRequestPtr &req,
               std::function<void (const HttpResponsePtr &)> &&callback);

    };
}