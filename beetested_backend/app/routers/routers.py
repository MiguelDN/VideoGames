from rest_framework.routers import DefaultRouter
from app.views import PlayerViewSet

router=DefaultRouter()

router.register(r'player', PlayerViewSet, basename='player')

urlpatterns = router.urls