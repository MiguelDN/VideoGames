from rest_framework.routers import DefaultRouter
from app.views import PlayerViewSet, GameViewSet

router=DefaultRouter()

router.register(r'players', PlayerViewSet, basename='player')
router.register(r'games', GameViewSet, basename='game')

urlpatterns = router.urls