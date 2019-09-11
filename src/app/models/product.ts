export class Product{
    AuctionID: string;
    Bids: string;
    Title: string;
    Price: string;
    TaxRate: string;
    Quantity: string;
    StartTime: string;
    EndTime: string;
    Time: Number;
    Initprice: string;
    Seller = new Seller();
}
class Seller{
    Id: string;
    Rating = new Rating();
}

class Rating{
    Point: string;
    TotalBadRating: string;
}