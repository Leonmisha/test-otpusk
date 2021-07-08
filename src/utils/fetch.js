// Вспомогательная функция для избежания дублирования response.json()
export function getJSONResponse(method, ...params) {
    return new Promise((resolve, reject) => {
        method(...params)
            .then( response => response.json())
            .then( data => resolve(data))
            .catch( response => {
                response.json()
                    .then( dataErr => reject(dataErr))
                    .catch( errJSON => reject(errJSON))
            })
    })
}