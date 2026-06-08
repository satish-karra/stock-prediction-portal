# Stock Prediction Portal

A full-stack web application that predicts stock prices using a **Deep Learning LSTM model**, built with **Django REST Framework**, **React.js**, and **Machine Learning**.

---

## Demo

Watch the live demo on LinkedIn → [Stock Prediction Portal Demo](https://www.linkedin.com/in/satishkarra/)

---

## Screenshots

![App Screenshot](screenshots/Screenshot%202026-06-01%20143927.png)

---

## Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Frontend     | React.js, Vite, React Router, Axios |
| Backend      | Django 6, Django REST Framework     |
| Auth         | JWT (SimpleJWT)                     |
| ML Model     | LSTM Neural Network (Keras/TF)      |
| Data Source  | Yahoo Finance (yfinance)            |
| Data Tools   | Pandas, NumPy, Scikit-learn         |
| Visualization| Matplotlib                          |
| Database     | SQLite3                             |

---

## Features

- User Registration & Login with JWT Authentication
- Search any stock by ticker symbol (e.g. AAPL, TSLA, GOOGL)
- Fetch 10 years of historical stock data via Yahoo Finance
- Interactive charts: Closing Price, 100-Day MA, 200-Day MA
- LSTM Deep Learning model predicts future stock prices
- Model evaluation metrics: MSE, RMSE, R² Score
- REST API backend fully decoupled from React frontend

---

## Project Structure

```
stock-prediction-portal/
├── backend-drf/                  # Django REST Framework backend
│   ├── accounts/                 # User auth (register/login)
│   ├── api/                      # Stock prediction API
│   │   ├── views.py              # Core ML + prediction logic
│   │   ├── serializers.py
│   │   └── utils.py
│   ├── stock_predition_main/     # Django project settings
│   ├── stock_prediction_model.keras  # Trained LSTM model
│   └── manage.py
│
├── frontend-react/               # React.js frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Main.jsx
│   │   │   └── dashboard/
│   │   │       └── Dashboard.jsx
│   │   ├── App.jsx
│   │   ├── AuthProvider.jsx
│   │   ├── PrivateRoute.jsx
│   │   └── PublicRoute.jsx
│   └── package.json
│
├── Resources/                    # Jupyter Notebook & ML model training
└── requirements.txt
```

---

## Getting Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- npm or yarn

---

### 1. Clone the Repository

```bash
git clone https://github.com/satish-karra/stock-prediction-portal.git
cd stock-prediction-portal
```

---

### 2. Backend Setup (Django)

#### Create and activate a virtual environment

```bash
# Windows
python -m venv env
env\Scripts\activate

# macOS / Linux
python -m venv env
source env/bin/activate
```

#### Install Python dependencies

```bash
pip install -r requirements.txt
```

#### Create a `.env` file in the `backend-drf/` folder

```bash
cd backend-drf
```

Create a file named `.env` and add the following:

```env
SECRET_KEY=your-secret-key-here
DEBUG=True
```

> To generate a Django secret key, run:
> ```bash
> python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
> ```

#### Run database migrations

```bash
python manage.py migrate
```

#### Start the Django development server

```bash
python manage.py runserver
```

Backend runs at: `http://127.0.0.1:8000`

---

### 3. Frontend Setup (React)

Open a new terminal window:

```bash
cd frontend-react
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

### 4. Open the App

Visit `http://localhost:5173` in your browser, register an account, and start predicting stocks!

---

## ML Model

The LSTM (Long Short-Term Memory) model is pre-trained and saved as `stock_prediction_model.keras` inside the `backend-drf/` directory.

- Trained on 10 years of historical stock closing price data
- Uses 70% data for training, 30% for testing
- Input: 100-day sequences of closing prices
- Output: Predicted closing price
- Evaluation: MSE, RMSE, R² Score

> The Jupyter Notebook used for training is available in the `Resources/` folder.

---

## API Endpoints

| Method | Endpoint                    | Description              | Auth Required |
|--------|-----------------------------|--------------------------|---------------|
| POST   | `/api/accounts/register/`   | Register a new user      | No            |
| POST   | `/api/accounts/login/`      | Login and get JWT tokens | No            |
| POST   | `/api/predict/`             | Predict stock prices     | Yes           |

---

## Important Disclaimer

> This stock prediction model is built **purely for educational purposes**.
> It should **NOT** be used for real stock market trading or investment decisions.
> Relying on this model for actual investments can lead to significant financial risk.

---

## Author

**Satish Karra**
- GitHub: [@satish-karra](https://github.com/satish-karra)
- LinkedIn: [linkedin.com/in/satishkarra](https://www.linkedin.com/in/satishkarra/)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with passion by [Satish Karra](https://www.linkedin.com/in/satishkarra/) — Full Stack Developer & ML Enthusiast*
