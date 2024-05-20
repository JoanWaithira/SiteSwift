from models.base_model import BaseModel, Base
from sqlalchemy import Column, Integer, ForeignKey, DateTime, Float, String
from sqlalchemy.orm import relationship


class Order(BaseModel, Base):
    """This class will define the order model for SITESWIFT"""

    __tablename__ = 'orders'
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    hosting_plan_id = Column(Integer, ForeignKey('hosting_plans.id'), nullable=False)
    amount = Column(Float, nullable=False)
    status = Column(String(20), nullable=False)  # e.g., 'pending', 'completed'
    user = relationship('User', backref='orders', cascade='all, delete-orphan', single_parent=True, lazy=True)
    hosting_plan = relationship('HostingPlan', backref='orders', cascade='all, delete-orphan', single_parent=True, lazy=True)