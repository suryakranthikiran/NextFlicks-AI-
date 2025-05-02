export const NETFLIX_LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const LOGIN_BG_IMG = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"


export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzIzNDlhMjY4NmM0ZDg3ZTVkNzA2OTVmNzk3YzM2MyIsIm5iZiI6MTcyNzA3MTk5OS42NDQsInN1YiI6IjY2ZjEwNmZmZGUyZDUyZGZiZDhkMGNhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OqAzMmU7g9FVS1xyYxpTZrHxUCcmO1t1HAzEjvJ6DO0'
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

export const SUPPORTED_LANGUAGES = [
    { identifier: "english", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "kannada", name: "Kannada" },
    { identifier: "tamil", name: "Tamil" }
]

const API_KEY = import.meta.env.VITE_API_KEY;
export const AI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + API_KEY