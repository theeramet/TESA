from flask import Flask, request, abort

from linebot import (
    LineBotApi, WebhookHandler
)
from linebot.exceptions import (
    InvalidSignatureError
)
from linebot.models import (
    MessageEvent, TextMessage, TextSendMessage,
)

app = Flask(__name__)

line_bot_api = LineBotApi('8BPbcIzyUyuwwO/nD1/ulYP4j1uTC46cgyaUfkMyjXImHdK4yW1JfDwx7AfsTYfFTEB2w++vU0rWEO7mBrxu6ku+/z/qK+1Rrz6D5hone8SFmQVIfn4EM8U1Cp/7WEFBj2MXr6c5ZWnHAfRFPs+mrQdB04t89/1O/w1cDnyilFU=')
handler = WebhookHandler('2631274b560d9c35c00b6eae387228f8')


@app.route("/callback", methods=['POST'])
def callback():
    # get X-Line-Signature header value
    signature = request.headers['X-Line-Signature']

    # get request body as text
    body = request.get_data(as_text=True)
    app.logger.info("Request body: " + body)

    # handle webhook body
    try:
        handler.handle(body, signature)
    except InvalidSignatureError:
        abort(400)

    return 'OK'


@handler.add(MessageEvent, message=TextMessage)
def handle_message(event):
    line_bot_api.reply_message(
        event.reply_token,
        TextSendMessage(text='ปลั๊กหัวดอ'))


if __name__ == "__main__":
    app.run()
