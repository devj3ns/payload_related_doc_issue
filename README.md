The populated values of the related document do not match the queried locale, instead they are in the default locale. See the second image. With the REST API it works.

## GraphQL (does not work)

Query with locale "de":
![query de](https://github.com/devj3ns/payload_related_doc_issue/assets/20878653/de9d7297-b8ae-4ec7-ae01-436f21ca3ba3)

Query with locale "en":
![query_en](https://github.com/devj3ns/payload_related_doc_issue/assets/20878653/02469bed-b895-4cef-abb9-a386c1975952)


## Rest API (does work)

Query with locale "de":
![image](https://github.com/devj3ns/payload_related_doc_issue/assets/20878653/8118bb05-4052-4d1a-8359-b97ef526f91d)

Query with locale "en":
![image](https://github.com/devj3ns/payload_related_doc_issue/assets/20878653/8ebcee2f-182d-457a-8cc2-a582198d1082)
