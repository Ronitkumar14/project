//jab bhi hum koi response deghe wo is file ke andr class ke through jaega
class ApiResponse{
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode<400
        

    }
}
// information data koi send ho rhi he tu status code-->100-199
// successful responses-->200-299
// Redirectional responses-->300-399
// Client error messages(like password sahi nhi bheja ho) -->400-499
// Server error responses-->500-599