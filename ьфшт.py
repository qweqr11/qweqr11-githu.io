import requests

headers = {


}

dat = {
    'publicKey':'48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPy1rpLi6oC7QdvUw4ckusjDGxunerT2kxHyb5BrKy3eVJEFfzzkqV2itovcmzY1MAXhMdqpEGvRxqaXekTbEL877bDyEftFqnmVkxADf9M',
    'amount' :2.0,
    'currency' :'RUB',
    'comment' :'test2',


}


res = requests.get('https://oplata.qiwi.com/create',params=dat)
print(res.url)

# from quart import Quart
#
# app = Quart(__name__)
#
# @app.route('/')
# async def hello():
#     return 'hellox'
# @app.route('/ss')
# async def wtf():
#     return 'sdds'
# app.run()